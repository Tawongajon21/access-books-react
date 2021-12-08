import DeepWork from "./books/deepWork.pdf";
import growingInFaith from "./books/growingInFath.pdf";
import book3 from "./books/rightAndGoodThinking.pdf";
import book4 from './books/triumphantChurch.pdf';
import book5 from './books/food.pdf';
import book6 from './books/expel.pdf';

import book7 from './books/tongues.pdf';
import book8 from './books/visions.pdf';
import book9 from './books/Growing.pdf';
import book10 from "./books/react.pdf";
import book11 from './books//vol1.pdf';
import book12 from './books/outliers.pdf';
import book13 from './books/node.pdf'
import photoOne from './photos/deepwork.webp';
import photoTwo from './photos/faith.webp';
import photoThree from './photos/rightandwrong.webp';
import photoFour from './photos/triumphant .webp';
import photoSix from './photos/photo-twenty.webp';
import photoSeven from './photos/node.webp'
export const data=[
    {
        id:Math.random().toString(),
        name:"Deep Work",
        author:"Cal Newport",
        file:DeepWork,
        category:"Motivation",
        featured:false,
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum porro cupiditate delectus nostrum perferendis neque explicabo doloribus eveniet, quod facere!",
        photo:photoOne,
        slug:"Deep Work"
    },
    {
        id:Math.random().toString(),
        name:"Growing In Faith ",
        slug:"Growing In Faith ",
        author:"Kenneth E Haggins",
        file:growingInFaith,
         category:"Christianity",
         featured:true,
         photo:photoTwo,
         desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis facilis dolores cumque saepe sunt? Sint.'
    },
    {
        id:Math.random().toString(),
        name:"Right and Good Thinking ",
        slug:"Right and Good Thinking ",
        author:"Kenneth E Haggins",
        file:book3,
         category:"Christianity",
         featured:true,
         photo:photoThree,
         desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, minima.'
    },
    {
        id:Math.random().toString(),
        name:"Triumphant Church ",
        slug:"Triumphant Church ",
        author:"Kenneth E Haggins",
        file:book4,
         category:"Christianity",
         featured:true,
         photo:photoFour,
         desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, minima.'
    },
{
    id:Math.random().toString(),
    name:"Healthy Food Devotions",
    slug:"Healthy Food Devotions",
    author:"Kenneth E Hagins",
    category:"Christianity",
    featured :false,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!',
    file:book5
},
{
    id:Math.random().toString(),
    name:"They Shall Expel Demons",
    slug:"They Shall Expel Demons",
    author:"Derek Prince",
    category:"Christianity",
    featured:false,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!',
    file:book6
},
{
    id:Math.random().toString(),
    name:"Tongues Beyond the Upper Room",
    slug:"Tongues Beyond the Upper Room",
    author:"Kenneth E. Haggins",
    category:"Christianity",
    featured:false,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!',
    file:book7
},
{
    id:Math.random().toString(),
    name:"I Believe In Visions",
    slug:"I Believe In Visions",
    author:"Kenneth E. Haggins",
    category:"Christianity",
    featured:false,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!',
    file:book8
},
{
    id:Math.random().toString(),
    name:"Growing Up Spiritually ",
slug:"Growing Up Spiritually ",
    author:"Kenneth E. Haggins",
    category:"Christianity",
    featured:false,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!',
    file:book9
},
{
    id:Math.random().toString(),
    name:"React Fundamentals ,Redux,React Hooks",
    slug:"React Fundamentals ,Redux,React Hooks",
    author:"Alex Banks and Eve Porcello",
    category:"Programming",
    featured:true,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!',
    file:book10
},
{
    id:Math.random().toString(),
    name:"The Logistics Ecosystem Report Volume 1",
    slug:"The Logistics Ecosystem Report Volume 1",
    author:"Gugulethu Siso",
    category:"Journal",
    featured:true,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!',
    file:book11
},
{
    id:Math.random().toString(),
    name:"The Outliers The Story of Success",
    slug:"The Outliers The Story of Success",
    author:"Malcolm Gladwell  ",
    category:"Motivation",
    featured:true,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!',
    file:book12,
    photo:photoSix
},
{
    id:Math.random().toString(),
    name:"Programming Javascript Applications ",
    slug:"Programming Javascript Applications",
    author:"Eric Elliot  ",
    category:"Programming",
    featured:false,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!',
    file:book13,
    photo:photoSeven
},
]