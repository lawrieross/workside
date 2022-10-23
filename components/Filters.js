import { Chevron } from './Chevron'

export default function Filters({ isFilterOpen, toggleFilter }) {
  return (
    <div className={`dropdown ${isFilterOpen ? 'open' : 'closed'}`}>
      <button onClick={() => toggleFilter(!isFilterOpen)}>
        Filters
        <Chevron />
      </button>

      <div className="dropdown-content">
        <h3>Location</h3>
        <h3>Payment</h3>
        <h3>Level</h3>
      </div>
    </div>
  )
}
