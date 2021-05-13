


    getContentGithub (username) {
         axios({methods: 'get', url: `https://api.github.com/users/${username}`})
         .then(res => {
            this.dataModal.github.respos = res.data.public_repos
            this.dataModal.github.followers = res.data.followers
         })
         .catch(err => console.log(err))
     }
     showDetails (param, channel) {
         this.showModal = param

         if (channel !== undefined) {
             
             this.dataModal.github.url = channel.urlGithub
             this.getContentGithub('carlavul')
         }
     }
    }

 getChannels () {
     axios({methods: 'get', url:`http://localhost:`})
     .then(res => {
         this.channels = res.data.channels
     })
     .catch(er => console.log(err))

}
