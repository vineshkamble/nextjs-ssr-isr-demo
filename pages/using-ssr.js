export default function UsingSSR({ time }) {
  return (
    <main>
      <h1>SSR Caching with Next.js</h1>
      <time dateTime={time}>{time}</time>
    </main>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader("cache-control", "max-age=3600")
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // )

  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}
