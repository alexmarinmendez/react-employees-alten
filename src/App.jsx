import { employee } from './utils/mock';

function App() {
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Role</td>
          <td>Salary</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          employee.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.salary}</td>
              <td>
                <button>Details</button>
                <button>Edit</button>
                <button>Detete</button>
              </td>
            </tr>
          ))
        }


      </tbody>
    </table>
  )
}

export default App
