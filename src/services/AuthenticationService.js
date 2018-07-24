import Api from '@/services/Api'

export default {
  login(credentials){
    try {
      throw "Test"
      // return Api().post('auth/login', credentials);
    }catch(err){
      // console.log(err)
      return {
        data: {
          user: {
            userId: credentials.userId,
            name: "Test User 1",
            role: credentials.role
          },
          token: "token"
        }
      }
    }
  },
  logout(credentials){
    try {
      throw "Test"
      // return Api().post('auth/logout', credentials);
    }catch(err){
      // console.log(err)
      return {}
    }
  }
}
