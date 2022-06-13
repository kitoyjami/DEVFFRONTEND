import { useEffect, useState } from 'react'
import { getCountries } from '../services'

const Countries = () => {
  const [listCountries, setListCountries] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: countries } = await getCountries()
        setListCountries(countries)
      } catch (error) {
        setError(error)
      }
    }
    getData()
  }, [])

  return listCountries.length === 0
    ? (
      <p>...Loading</p>
      )
    : (
      <p> {listCountries[0].name.common} </p>
      )
}
export default Countries
