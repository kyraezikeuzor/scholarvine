import requests
from bs4 import BeautifulSoup
import csv
from selenium import webdriver 
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from time import sleep 
from urllib.parse import urlparse
import os
from data._labels import link_type_identifiers


# Wait for the number of anchor elements to change (indicating new anchors are loaded)
def wait_for_anchors_to_load(browser):
    old_anchor_count = len(BeautifulSoup(browser.page_source, 'html.parser').find_all('a'))
    
    try:
        new_anchor_count = WebDriverWait(browser, 10).until(
            lambda browser: len(BeautifulSoup(browser.page_source, 'html.parser').find_all('a')) > old_anchor_count
        )
        print("Last anchor is loaded on the page")
    except Exception as e:
        print("Timed out waiting for last anchor:", e)

def clean_link(link):
    # String to remove
    substring1 = "/url?esrc=s&q=&rct=j&sa=U&url="
    substring2 = '&ved'

    # Check if the substring is present in the original URL
    if substring1 in link:
        # Find the starting index of the substring
        s1_index = link.index(substring1)

        # Slice the original URL to remove the substring
        modified_link = link[:s1_index] + link[s1_index + len(substring1):]

        s2_index = modified_link.index(substring2)

        modified_link = modified_link[:s2_index]
        
        # Print the modified URL
        return modified_link
    else:
        # If the substring is not present, print the original URL
        return link
    

def main():
    service = Service(executable_path='./chromedriver.exe')
    chrome_options = Options()
    chrome_options.add_argument("--headless")  
    chrome_options.add_argument('user-agent=Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36')    

    browser = webdriver.Chrome(options=chrome_options) #ChromeDriverManager().install(),
    url='https://www.google.com/search?q=high+school+medicine+program&num=30'
    browser.get(url)

    # MY CODING
    linksArray = []

    # Trigger the custom wait condition
    wait_for_anchors_to_load(browser)

    # Now you can use BeautifulSoup to find all anchor elements
    soup = BeautifulSoup(browser.page_source, 'html.parser')
    links = soup.find_all('a')

    # Print the text of each anchor element
    for each in links:
        link = clean_link(each.get('href'))
        linksArray.append({"Link": link})
    
    for i in linksArray:
        print(i)

main()


