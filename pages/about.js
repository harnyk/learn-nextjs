import Layout from '../components/layout';
import { withRouter } from 'next/router';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class About extends Component {
    static async getInitialProps(context) {
        const { id } = context.query;
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await res.json();
        console.log(`Fetched show: ${data.name}`);
        return { data };
    }

    render() {
        const {
            props: {
                data,
                router: {
                    query,
                    query: { id }
                }
            }
        } = this;
        return (
            <Layout>
                <p>Govno</p>
                <pre>{JSON.stringify(data, false, 2)}</pre>
                <pre>{JSON.stringify(query, false, 2)}</pre>
            </Layout>
        );
    }
}

export default withRouter(About);
