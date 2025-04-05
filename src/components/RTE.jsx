import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Controller } from 'react-hook-form';

export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full bg-white'> 
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange, value}}) => (
          <ReactQuill
            theme="snow"
            value={value || defaultValue}
            onChange={onChange}
            modules={{
              toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                ['link', 'image'],
                ['clean']
              ]
            }}
            style={{ height: '500px' }}
          />
        )}
      />
    </div>
  )
}