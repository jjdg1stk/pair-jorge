const useUserList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    userService.getAllUser().then( data =>
      setData(data)
    )
  }, [])

  return data
}