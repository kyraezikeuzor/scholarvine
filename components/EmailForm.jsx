'use client'
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import Button  from './Button';
import Icon from './Icon'

function EmailForm() {
    const url = "https://computefutures.us8.list-manage.com/subscribe/post?u=65c2aba71bc6d41953c14cc83&amp;id=5a1e70d2cb&amp;f_id=007105e0f0";
  // The url looks like the url below:
  // https://aaaaaaaaa.us20.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxx&amp;id=yyyyyyyyyy
  const {
      loading,
      error,
      success,
      message,
      handleSubmit
    } = useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
  });

  return (
    <div className=''>
      <form className="flex flex-col gap-5"
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <div className='flex flex-col gap-1'>
            <span className="font-bold text-2xl">Subscribe to our newsletter</span>
            <p>Learn about our latest events, resources, programs, and more!</p>
        </div>

        <fieldset className='flex flex-col md:flex-row gap-5'>
            <input
                id="FNAME"
                type="text"
                placeholder="First name"
                value={fields.FNAME}
                onChange={handleFieldChange}
                className='py-2 px-4 rounded-md bg-[--clr-base]'
            />
            <input
                id="LNAME"
                
                type="text"
                placeholder="Last name"
                value={fields.LNAME}
                onChange={handleFieldChange}
                className='py-2 px-4 rounded-md bg-[--clr-base]'
            />
        </fieldset>
        
        <input
          id="EMAIL"
          type="email"
          placeholder="Email"
          value={fields.EMAIL}
          onChange={handleFieldChange}
          className='py-2 px-4 rounded-md bg-[--clr-base]'
        />
        <button className='bg-[--clr-pink-dark] text-[--clr-cream-base] fill-[--clr-cream-base] font-semibold rounded-3xl px-4 py-2'>
            Subscribe <Icon icon="ArrowTopRight" size='sm'/>
        </button>
        
      </form>
      {loading && "Submitting..."}
      {error && message}
      {success && message}
    </div>
  );
}

export default EmailForm;