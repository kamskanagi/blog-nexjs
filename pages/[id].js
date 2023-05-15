import axios from 'axios';

function Article({ article }) {
    // You can now use the article directly in your component
    return (
        <div>
            <h1>{article?.attributes?.title}</h1>
            <p>{article?.attributes?.description}</p>
            <div dangerouslySetInnerHTML={{ __html: article?.attributes?.content }} />
        </div>
    );
}

export async function getStaticProps({ params }) {
    const { id } = params;

    const res = await axios.get(`https://strapi-gatsby-blog-demo.herokuapp.com/api/articles/${id}`);
    const data = res.data;

    return {
        props: {
            article: data.data,
        },
    };
}

export async function getStaticPaths() {
    // Assuming you have a list of article IDs available
    const articleIds = ['1', '2', '3', '4']; // Replace with your actual article IDs

    const paths = articleIds.map((id) => {
        return { params: { id: id.toString() } };
    });

    return {
        paths,
        fallback: false, // Set to true if there are more dynamic routes to handle
    };
}

export default Article;










// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import https from 'https';

// function Article({ article }) {
//     // you can now use article directly in your component
//     return (
//         <div>
//             <h1>{article?.attributes?.title}</h1>
//             <p>{article?.attributes?.description}</p>
//             <div dangerouslySetInnerHTML={{ __html: article?.attributes?.content }} />
//         </div>
//     );
// }

// export async function getServerSideProps(context) {
//     const { id } = context.query;

//     const agent = new https.Agent({  
//       rejectUnauthorized: false
//     });

//     const res = await axios.get(`https://strapi-gatsby-blog-demo.herokuapp.com/api/articles/${id}`, { httpsAgent: agent });
//     const data = res.data;
//     //console.log(data.data)

//     return {
//         props: {
//             article: data.data, // the response should be the article object directly
//         },
//     };
// }

// export default Article;







// import { useEffect, useState } from 'react';

// function Article({ article }) {
//     // you can now use article directly in your component
//     return (
//         <div>
//             <h1>{article?.attributes?.title}</h1>
//             <p>{article?.attributes?.description}</p>
//             <div dangerouslySetInnerHTML={{ __html: article?.attributes?.content }} />
//         </div>
//     );
// }

// export async function getServerSideProps(context) {
//     const { id } = context.query;

//     const res = await fetch(`https://strapi-gatsby-blog-demo.herokuapp.com/api/articles/${id}`);
//     const data = await res.json();
//     console.log(data.data)
//     return {
//         props: {
//             article: data.data, // the response should be the article object directly
//         },
//     };
// }

// export default Article;


// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import React from 'react'
// import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from '../graphql/queries';
// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemote } from 'next-mdx-remote';

// const client = new ApolloClient({
//     uri: "http://localhost:1337/graphql",
//     cache: new InMemoryCache()
// });

// export default function Post({ post }) {
//     return (
//         <div>
//             <h1>{post.title}</h1>
//             <MDXRemote {...post.content} />
//         </div>
//     )
// }

// export async function getStaticPaths() {

//     const { data } = await client.query({ query: GET_ALL_SLUGS });

//     const paths = data.blogPosts.data.map((post) => {
//         return { params: { slug: post.attributes.urlSlug } }
//     });

//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {

//     const { data } = await client.query({
//         query: GET_INDIVIDUAL_POST,
//         variables: { slugUrl: params.slug }
//     });

//     const attrs = data.blogPosts.data[0].attributes;

//     const html = await serialize(attrs.content);

//     return {
//         props: {
//             post: {
//                 title: attrs.title,
//                 content: html
//             }
//         }
//     }
// }

