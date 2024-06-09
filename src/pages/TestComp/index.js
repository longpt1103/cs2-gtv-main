import modal from 'components/modal/provider'

const TestComp = () => {
  return (
    <div>
      <div className="my-color custom-class">
        <p>This file just is test file.</p>
        <p>This file just is test file.</p>
        <p>This file just is test file.</p>
        <p>Dont' code product here.</p>
        <button
          className="btn btn-primary text-secondary"
          onClick={() => {
            modal.common.open()
          }}
        >
          Button
        </button>
      </div>
    </div>
  )
}

export default TestComp
