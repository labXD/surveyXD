import { NextPage } from 'next'
import { useActiveSurveyFromRoute } from '../hooks'

export const NewSurveyPage: NextPage = () => {
  const { loading, data } = useActiveSurveyFromRoute()

  if (loading) {
    return <div>Loading...</div>
  }

  // TODO: handle remaining statuses
  
  return (
  <>
    <h2>{data?.title ?? 'Untitiled'}</h2>
    {/* title input container */}
    {/* questions container  */}
  </>
  )
}
