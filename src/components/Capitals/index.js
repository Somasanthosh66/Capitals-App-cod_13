import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeOption: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeOption: event.target.value})
  }

  getCountry = () => {
    const {activeOption} = this.state
    const activeCounryAndCapital = countryAndCapitalsList.find(
      each => each.id === activeOption,
    )
    return activeCounryAndCapital.country
  }

  render() {
    const {activeOption} = this.state
    const country = this.getCountry(activeOption)

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={activeOption}
            >
              {countryAndCapitalsList.map(each => (
                <option className="option" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="des">is capital of which country? </p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
