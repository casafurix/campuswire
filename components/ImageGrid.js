export default function ImageGrid() {
  return (
    <div className='container mx-auto'>
      <div className='grid-cols-3 p-20 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3'>
        <div className='w-full rounded'>
          <img src='/img/charles-thumbnail.png' alt='image' />
        </div>
        <div className='w-full col-span-2 row-span-2 rounded'>
          <img
            src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
            alt='image'
          />
        </div>
        <div className='w-full rounded'>
          <img
            src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
            alt='image'
          />
        </div>
        <div className='w-full rounded'>
          <img
            src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
            alt='image'
          />
        </div>
        <div className='w-full rounded'>
          <img
            src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
            alt='image'
          />
        </div>
        <div className='w-full rounded'>
          <img
            src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
            alt='image'
          />
        </div>
      </div>
    </div>
  );
}
