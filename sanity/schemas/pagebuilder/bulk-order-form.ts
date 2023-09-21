import { defineType } from "sanity";
import { textAlign } from "../lib/classes";

export default defineType({
    title: 'Bulk Order Form',
    name: 'bulkOrderForm',
    type: 'object',
    fields: [
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor',
        },
        {
            title: 'Text Align',
            name: 'textAlign',
            type: 'string',
            options: {
                list: textAlign
            },
            initialValue: "text-center mx-auto justify-center"
        },
        {
            title: 'Form Builder',
            name: 'formBuilder',
            type: 'formBuilder',
        },
        {
            title: 'Form Builder Step 2',
            name: 'formBuilderTwo',
            type: 'formBuilder',
        },
        {
            title: 'Color Options',
            name: 'background',
            type: 'backgroundOptions',
          }
    ]
})