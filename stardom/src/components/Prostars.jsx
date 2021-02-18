import React, { Component } from 'react';
import prostars from './prostars.json';
class Prostars extends Component 
{
    constructor()
    {
        super()
        this.state={
            prostarsData:[...prostars]
        }
    }
    deleteElement(id)
    {
        var modifiedData= (this.state.prostarsData).filter((prostars)=>!(prostars.id==id));
        this.setState(
            {
                prostarsData:modifiedData
            }
        )

    }

    sortbyName(){
        var sortedData= (this.state.prostarsData).sort((prostar1,prostar2)=>{
            if (prostar1.name<prostar2.name)return -1;
            else return 1;
        });
        this.setState(
            {
                prostarsData:sortedData
            }
        )
        return;
    }
    sortbyPopularity(){
        var sortedData= (this.state.prostarsData).sort((prostar1,prostar2)=>{
            if (prostar1.popularity<prostar2.popularity)return 1;
            else return -1;
        });
        this.setState(
            {
                prostarsData:sortedData
            }
        )
        return;
    }
    render() {
        return (
            <React.Fragment>
            <div id="buttons">
            <button onClick={() => this.sortbyName() }id="sort-by-name">Sort by name</button>
            <button onClick={() => this.sortbyPopularity()} id="sort-by-popularity">Sort by Popularity</button>
            </div>
            <table>
            <thead>
                <tr>
                    <td><h3>Picture</h3></td>
                    <td><h3>Name</h3></td>
                    <td><h3>Popularity</h3></td>
                    <td><h3>Action</h3></td>
                </tr>
            </thead>
            <tbody>
            {
            this.state.prostarsData.map((prostars)=>    
            <React.Fragment key={prostars.id}>
                <tr key={prostars.id}>
                    <td><img src={prostars.pictureUrl} /></td>
                    <td>{prostars.name}</td>
                    <td>{prostars.popularity}</td>
                    <td><button onClick={this.deleteElement.bind(this,prostars.id)} id="delete-button">Delete</button></td>
                </tr>
            </React.Fragment>
            )
            }
            </tbody>
            </table>
            </React.Fragment>
        )
    }
}

export default Prostars;