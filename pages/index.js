import Link from 'next/link';
import Layout from '../components/layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class extends Component {
    static async getInitialProps() {
        const res = await fetch(
            'https://api.tvmaze.com/search/shows?q=doctor%20who'
        );
        const data = await res.json();
        return { data };
    }
    render() {
        const {
            props: { data }
        } = this;
        return (
            <Layout>
                <ul>
                    {data.map(({ show: { id, name } }) => (
                        <li key={id}>
                            <Link as={`/p/${id}`} href={`/about?id=${id}`}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <p>shit</p>
                <p>
                    <pre>{JSON.stringify(data, 0, 2)}</pre>
                </p>
                <p>
                    <Link as={`/p/asd`} href={`/about?title=asd`}>
                        <a>asd</a>
                    </Link>
                </p>
            </Layout>
        );
    }
}

//https://api.tvmaze.com/search/shows?q=doctor%20who
