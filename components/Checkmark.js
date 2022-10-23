export const Checkmark = ({ verified }) => {
  if (verified) {
    return <Verified />
  }
  return <Unverified />
}

const Verified = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect y="0.25" width="22" height="21.5" rx="10.75" fill="#005DF9"/>
    <path d="M15.1425 6.25L9.5 12.0335L6.857 9.528L5 11.386L9.5 15.75L17 8.1075L15.1425 6.25Z" fill="white"/>
  </svg>
)

const Unverified = () => (
  <svg width="23" height="22" viewBox="0 0 23 22" fill="none">
    <path d="M15.6425 6.25L10 12.0335L7.357 9.528L5.5 11.386L10 15.75L17.5 8.1075L15.6425 6.25Z" fill="#8F9BB3"/>
    <rect x="1" y="0.75" width="21" height="20.5" rx="10.25" stroke="#8F9BB3"/>
  </svg>
)
