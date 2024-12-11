// import { useState } from 'react';
import './App.css'
import { create } from 'zustand'

function App() {

  const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state: {bears: number}) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears: any) => set({ bears: newBears })
  }))

  // const [count, setCount] = useState(0)

  // const user = {
  //   name: 'Lara Croft',
  //   imagUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  //   imageSize: 90

  // }

  // function MyButton() {
  //   const [count, setCount] = useState(0);


  //   return (
  //     <>
  //       <button onClick={() => setCount(count + 1)} >clicked { count }</button>
  //     </>
  //   )
  // }

  // const isLoggedin = true;

  // const products = [
  //   { title: 'Cabbage', id: 1 },
  //   { title: 'Garlic', id: 2 },
  //   { title: 'Apple', id: 3 },
  // ];


  // function AdminPage() {
  //   return (
  //     <>
  //       <h1>Admin</h1>

  //       {products.map((product) => {
  //         return (
  //         <ul>
  //           <li key={product.id}>
  //             {product.title}
  //           </li>
  //         </ul>

  //         )
  //       })}
  //     </>
  //   )
  // }

  // function GuestPage() {
  //   return (
  //     <>
  //       <h1>Guest</h1>
  //     </>
  //   )
  // }

  // function handleCount() {
  //   setCount(count + 1)
  // }

  // function MyButton(count: number) {
  //   return (
  //     <button onClick={handleCount()}>clicked {count} times</button>
  //   )
  // }


  return (
    <>
      {/* <div>
        <img src={user.imagUrl} alt={user.name} style={{ width: user.imageSize, height: user.imageSize }}/>
        <div className='text-red-400' >{ user.name }</div>
      </div> */}

      {/* {isLoggedin ? (
        <AdminPage />
      ) : (
        <GuestPage />
      )} */}

      {/* { isLoggedin && <AdminPage/> } */}
      {/* <ul>
        { products.map((product) => {
          return (
          <li key={product.id}>
            {product.title}
          </li> 
          )
        })}
      </ul>


      <MyButton count={count} onClick={handleCount()}></MyButton>
      <MyButton count={count} onClick={handleCount()}></MyButton> */}
    </>
  )
}

export default App
