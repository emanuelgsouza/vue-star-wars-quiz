const initializeApp = async ({ dispatch }) => {
  console.log('-- loadData')

  try {
    console.log('---- loadPersons')
    await dispatch('loadPersons')

    console.log('---- loadPlanets')
    await dispatch('loadPlanets')
  } catch (err) {
    console.error('An error ocurren when load data')
  }
}

export default [ initializeApp ]
