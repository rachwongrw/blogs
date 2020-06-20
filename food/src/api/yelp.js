import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 4VpGsG_-MADIpYSrqneKZ4IfCIKYotsxoni7Uab-iy3ujyzC854rPf9iJ9mmeoyKBJIuDFORYkORuPre-F4fdICdZrxTCvbSamo3NSzqGLFDKrjILB2fIaHta63SXnYx'
  }
})