import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Learn More | ScholarVine',
    description: 'Discover how ScholarVine helps you find and save hundreds of activities and opportunities.',
};

export default function LearnMorePage() {
    return (
        <main className="py-[2vh] mx-5 md:mx-[12vw] lg:my-[10vh]">
            <header className="flex flex-col gap-6">
                <div>
                    <h1 className="mt-[1vh] text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold">
                        What is ScholarVine?
                    </h1>
                    <p className="mt-4 text-sm md:text-lg leading-relaxed">
                        ScholarVine is a platform designed to connect students with hundreds of curated 
                        opportunities, from scholarships to extracurricular activities. Whether you&apos;re exploring 
                        ways to enhance your resume, apply for financial aid, or find programs that align with 
                        your passions, ScholarVine is here to make the process simple and efficient.
                    </p>
                </div>
            </header>

            <section className="mt-10">
                <h2 className="text-2xl font-medium">What Can You Do with ScholarVine?</h2>
                <ul className="mt-4 space-y-2 text-base md:text-lg leading-relaxed">
                    <li>
                        <strong>Discover New Opportunities:</strong> Browse a wide range of activities, programs, and scholarships 
                        tailored to your goals and interests.
                    </li>
                    <li>
                        <strong>Save and Track Your Favorites:</strong> Bookmark opportunities you&apos;re interested in and 
                        easily access them whenever you need.
                    </li>
                    <li>
                        <strong>Plan for Your Future:</strong> Build a portfolio of experiences that will help you stand 
                        out in college applications and job searches.
                    </li>
                </ul>
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-medium">How Does It Work?</h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed">
                    ScholarVine is easy to use. Simply create an account, browse through the opportunities available, 
                    and save the ones that interest you. Our platform is designed to keep you organized and focused 
                    on achieving your goals, whether academic, professional, or personal.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-medium">Why Choose ScholarVine?</h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed">
                    We understand how overwhelming it can be to find the right opportunities amidst all the options 
                    available. ScholarVine simplifies this process by providing a user-friendly platform and carefully 
                    curated listings that match your unique profile and aspirations. It&apos;s more than just a platform – 
                    it&apos;s your partner in achieving success.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-xl md:text-2xl font-semibold">Start Your Journey Today</h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed">
                    Ready to explore the possibilities? Join ScholarVine and discover the opportunities waiting 
                    for you. Take the first step toward your dreams today.
                </p>
            </section>
        </main>
    );
}
