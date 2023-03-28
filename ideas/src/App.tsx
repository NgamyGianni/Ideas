import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './server'


const App = ()  => {
  const [currentInput, setCurrentInput] = useState<string>("")
  const [ideas, setIdeas] = useState<Array<string>>([])

  const fetchIdeas = async () => {
    const { data, error } = await supabase
      .from('Ideas')
      .select('*')

    if(error) location.reload()
    setIdeas(dataToIdeas(data))

    return data;
  }

  const dataToIdeas = (data : object) : Array<string> => data.map((e) => e.idea)

  const submitIdea = async () => {
    if(currentInput !== "") {
      const { error } = await supabase
        .from('Ideas')
        .insert({idea : currentInput})

      if(error) window.alert("Repost your idea!")
    }
  }

  useEffect(() => {
    fetchIdeas()
  }, [fetchIdeas])

  return (
    <div>
      <h1>Share your ideas and inspire the world. 🌍</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
        <textarea style={{fontSize: "30px", height: "100px", width: "600px"}} value={currentInput} placeholder="Type here" onChange={(e) => setCurrentInput(e.target.value)}/>
        <button onClick={(e) => {submitIdea(); setCurrentInput("")}}>Post !</button>
      </div>
      <h1 style={{marginTop: "40%"}}>Ideas : </h1>
      {ideas.map((idea : string) => <p style={{fontSize: "30px"}}>- {idea}</p>)}
    </div>
  )
}

export default App
