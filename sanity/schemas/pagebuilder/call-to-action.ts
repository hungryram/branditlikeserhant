import { defineType } from "sanity";
import { colorOptions, paddingBottom, paddingTop, primaryButton, secondaryButton, textAlign } from "../lib/classes";

export default defineType({
    title: 'Call to Action',
    name: 'ctaSection',
    type: 'object',
    groups: [
        { title: 'Content', name: 'content' },
        { title: 'Settings', name: 'settings' },
    ],
    fields: [
        {
            title: "Layout Type",
            name: "layoutType",
            type: "string",
            options: {
                list: [
                    { title: "Banner", value: "banner" },
                    { title: "Text and Image", value: "textAndImage" },
                    { title: "Left Text with Right Buttons", value: "ButtonRightTextLeft" },
                    { title: "Full Width Text & Image", value: "fullWidthTextImage" },
                    { title: "Call to Action Custom", value: "ctaCustom" },
                ],
            },
            initialValue: "banner"
        },
        {
            title: 'Text',
            name: 'content',
            type: 'contentEditor',
            group: 'content',
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
            title: 'Image',
            name: 'image',
            type: 'image',
            hidden: ({ parent }) => parent?.layoutType === "banner" || parent?.layoutType === "ButtonRightTextLeft"
        },
        {
            title: 'Image Priority',
            name: 'priority',
            type: 'boolean',
            hidden: ({ parent }) => parent?.layoutType === "banner" || parent?.layoutType === "ButtonRightTextLeft"
        },
        {
            title: 'Step 1 Content',
            name: 'stepOnecontent',
            type: 'contentEditor',
            group: 'content',
            hidden: ({ parent }) => parent?.layoutType !== 'ctaCustom'
        },
        {
            title: 'Step 2 Content',
            name: 'stepTwocontent',
            type: 'contentEditor',
            group: 'content',
            hidden: ({ parent }) => parent?.layoutType !== 'ctaCustom'
        },
        {
            title: 'Step 3 Content',
            name: 'stepThreecontent',
            type: 'contentEditor',
            group: 'content',
            hidden: ({ parent }) => parent?.layoutType !== 'ctaCustom'
        },
        {
            title: 'Form Builder',
            name: 'formBuilder',
            type: 'formBuilder',
            group: 'content',
            hidden: ({ parent }) => parent?.layoutType !== 'ctaCustom'
        },
        {
            title: 'Reverse Column',
            name: 'reverseColumn',
            type: 'boolean',
            hidden: ({ parent }) => parent?.layoutType === "banner" || parent?.layoutType === "ButtonRightTextLeft"
        },
        primaryButton,
        secondaryButton,
        {
            title: 'Modal Button',
            name: 'modalButton',
            type: 'string'
        },
        {
            title: 'Modal Button Link',
            name: 'modalButtonLink',
            type: 'string'
        },
        {
            title: 'Modal Image',
            name: 'modalImage',
            type: 'image'
        },
        {
            title: 'Modal Content',
            name: 'modalContent',
            type: 'contentEditor'
        },
        {
            title: 'ID',
            name: 'id',
            type: 'string'
        },
        colorOptions,
        paddingTop,
        paddingBottom,
    ],
    preview: {
        select: {
            content: 'content',
        },
        prepare({ content }) {
            const hasContent = content && content[0]?.children?.length > 0;

            return {
                title: hasContent ? content[0].children[0].text : 'Call to Action',
            };
        },
    },
})