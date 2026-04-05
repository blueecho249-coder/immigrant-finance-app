export default function Layout({ children }) {
  return (
    <div style={{padding: '20px', backgroundColor: '#f0f0f0'}}>
      <h1 style={{fontSize: '24px', marginBottom: '20px'}}>SIMPLE LAYOUT TEST</h1>
      {children}
    </div>
  )
}
