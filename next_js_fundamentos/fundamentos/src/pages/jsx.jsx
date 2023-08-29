import Layout from "../components/Layout"

export default function Jsx() {
    const a = 2
    const b = 3
    console.log(a * b)
    return (
        <Layout titulo='JSX'>
            <div>
                <h1>JSX é um conceito</h1>
            </div>
        </Layout>
    )
}