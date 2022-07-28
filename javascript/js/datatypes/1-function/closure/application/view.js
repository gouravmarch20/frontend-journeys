const callMe = () => {
  setTimeout(() => {
    console.log(
      message,
      '---- acess varible due to closure even EC has ended----'
    )
  }, 2000)
  const message = 'hii , gourav'
}
callMe()
