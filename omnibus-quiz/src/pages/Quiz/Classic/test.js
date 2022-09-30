const times = [2, 4, 6, 8, 12, 15, 20, 30, 45, 60, 90, 180, 600, 1800, 3600]

times.forEach((t) => {
  const base = 1000
  // const percentage = Math.log(t) ** 4
  const score = base
  console.log(`After ${t} seconds: ${score.toFixed(2)}`)
})
