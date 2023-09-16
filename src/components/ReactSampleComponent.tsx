export default function ReactSampleComponent() {
  return (
    <div className='border-2 p-8 bg-gray-700/80 text-center'>
      <button
        onClick={() => console.log('button clicked from react component')}
      >
        Click me
      </button>
    </div>
  )
}
