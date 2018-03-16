import React from 'react'

class Profile extends React.Component {
  componentDidMount() {
    if (typeof twttr != 'undefined') {
      twttr.widgets.load(this.refs.twButton)
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section className="text-left">
          <div className="container">
            <h1>Currently reading:</h1>
              <ul>
                <li><a href="https://www.amazon.com/Power-Broker-Robert-Moses-Fall/dp/0394720245" target="_blank"><em>The Power Broker: Robert Moses and the Fall of New York</em></a>, Robert Caro</li>
                <li><a href="https://www.amazon.com/Thinking-Bets-Making-Smarter-Decisions/dp/0735216355" target="_blank"><em>Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts</em></a>, Annie Duke</li>
              </ul>
            <h1>Recently read:</h1>
              <ul>
                <li><a href="https://www.amazon.com/Meditations-Modern-Library-Marcus-Aurelius/dp/B005GAB8HS" target="_blank"><em>Meditations</em></a>, Marcus Aurelius</li>
                <li><a href="https://www.amazon.com/Principles-Life-Work-Ray-Dalio/dp/1501124021" target="_blank"><em>Principles</em></a>, Ray Dalio</li>
                <li><a href="https://www.amazon.com/Hillbilly-Elegy-Memoir-Family-Culture/dp/0062300547" target="_blank"><em>Hillbilly Elegy</em></a>, J.D. Vance</li>
                <li><a href="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095" target="_blank"><em>Sapiens: A Brief History of Humankind</em></a>, Yuval Noah Harari</li>
                <li><a href="https://www.amazon.com/Master-Algorithm-Ultimate-Learning-Machine/dp/0465065708" target="_blank"><em>The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World</em></a>, Pedro Domingos</li>
                <li><a href="https://www.amazon.com/Everything-Store-Jeff-Bezos-Amazon-ebook/dp/B00BWQW73E" target="_blank"><em>The Everything Store: Jeff Bezos and the Age of Amazon</em></a>, Brad Stone</li>
                <li><a href="https://www.amazon.com/Technological-Revolutions-Financial-Capital-Dynamics/dp/1843763311" target="_blank"><em>Technological Revolutions and Financial Capital: The Dynamics of Bubbles and Golden Ages</em></a>, Carlota Perez</li>
                <li><a href="https://www.amazon.com/Option-Adversity-Building-Resilience-Finding/dp/1524732680" target="_blank"><em>Option B: Facing Adversity, Building Resilience and Finding Joy</em></a>, Sheryl Sandberg & Adam Grant</li>
                <li><a href="https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884" target="_blank"><em>High Output Management</em></a>, Andrew Grove</li>
              </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile