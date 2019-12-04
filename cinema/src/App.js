import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'


class App extends Component {
    //state obj contains properties for everything you want to store in the state
    //here, it's movies
    state = {
        movies: [],
    }

    removeMovie = index => {
        //To retrieve the state, we'll get this.state.movies using the same ES6 method as before. To update the state, we'll use this.setState(), a built-in method for manipulating state. We'll filter the array based on an index that we pass through, and return the new array.
        const { movies } = this.state
    
        this.setState({
            //filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JavaScript. This particular method is testing an index vs. all the indices in the array, and returning all but the one that is passed through.
            movies: movies.filter((movie, i) => {
                return i !== index
            }),
        })
    }

    
    handleSubmit = movie => {
        this.setState({ movies: [...this.state.movies, movie ] })
    }


    render() {
        //needed data stores in render in const _movies_, before return
            // const movies = [
            //     {
            //         description:"In the year 2045, the real world is a harsh place. The only time Wade Watts (Tye Sheridan) truly feels alive is when he escapes to the OASIS, an immersive virtual universe where most of humanity spends their days. In the OASIS, you can go anywhere, do anything, be anyone-the only limits are your own imagination. The OASIS was created by the brilliant and eccentric James Halliday (Mark Rylance), who left his immense fortune and total control of the Oasis to the winner of a three-part contest he designed to find a worthy heir. When Wade conquers the first challenge of the reality-bending treasure hunt, he and his friends-aka the High Five-are hurled into a fantastical universe of discovery and danger to save the OASIS. Written by Warner Bros.",
            //         name:"ready player one",
            //     },
            //     {
            //         description:"As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain. Written by Marvel Studios",
            //         name:"avengers: infinity war",
            //     },
            //     {
            //         description:"In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever, to be played by others without break. Written by Sony Pictures",
            //         name:"jumanji: welcome to the jungle",
            //     },
            //     {
            //         description:"Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor will manage to open a wax museum but will soon shift focus to the unique and peculiar, introducing extraordinary, never-seen-before live acts on the circus stage. Some will call Barnum's wide collection of oddities, a freak show; however, when the obsessed showman gambles everything on the opera singer Jenny Lind to appeal to a high-brow audience, he will somehow lose sight of the most important aspect of his life: his family. Will Barnum risk it all to be accepted? Written by Nick Riganas",
            //         name:"the greatest showman",
            //     }
            // ]
        const { movies } = this.state
        
        return (
        //stored data above is passed to the child component <Table/>
        //with (prop)eries, which were named here as _movieData_, and the data's definition
        //here is _movies_ const (it's a js expression here in curly braces)
        <div className='container'>
            <h1>cinema project</h1>
            <Table movieData={movies} removeMovie={this.removeMovie} />
        {/* <Table properties={data} 
        passing the removeMovie function through as a prop to Table.*/}
            <Form handleSubmit={this.handleSubmit} />
        </div>
        )
    }
}



//App.js is a COMPONENT. it exports using 'export default' and by including it in index.js with 'import --- from './---'
export default App