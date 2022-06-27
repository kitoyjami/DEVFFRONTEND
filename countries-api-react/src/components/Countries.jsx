import axios from 'axios'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
// import useAppContext from '../hooks/useAppContext'
// import useGetData from '../hooks/useGetData'

const fetcher = (url) => {
  axios.get(url).then(res => res.data.cath(err => err))
}

const Countries = () => {
  // const { query } = useAppContext()
  // const { list, loading, error } = useGetData(query)
  const { data: list, error } = useSWR('https://restcountries.com/v3.1/all', fetcher)

  if (error) {
    return <div>{error.message}</div>
  }

  if (!list) return <div>Loading...</div>

  return (
    <section className='row py-5 gy-4'>

      {list.map((index, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`country/${index.name.common}`}>
            <article className='card'>
              <img className='card-img-top' src={index.flags.svg} alt={index.name.common} />
              <div className='card-body'>
                <p className='card-title'>{index.name.common}</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>

  )
}
export default Countries
