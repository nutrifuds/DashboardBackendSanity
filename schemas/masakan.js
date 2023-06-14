import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'masakan',
    title: 'Masakan',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      {
        name:'imgurl',
        title:'ImgUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
    defineField({
      name: 'kategori',
      title: 'kategori',
      type: 'string',
    }),
      defineField({
        name: 'bahan_bahan',
        title: 'bahan-bahan',
        type: 'text',
      }),
      defineField({
        name: 'cara_memasak',
        title: 'cara memasak',
        type: 'text',
      }),
    ],
  })