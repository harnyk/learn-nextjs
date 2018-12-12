import Link from 'next/link';

export default () => (
    <div>
        <ul>
            <li>
                <Link href="/">Main</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </div>
);
