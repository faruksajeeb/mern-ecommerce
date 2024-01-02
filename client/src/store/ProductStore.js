import { set } from 'mongoose';
import {create} from 'zustand'

const useStore = create(()=>({
    BrandList : [],
    CategoryList : [],
    SliderList : [],
    ListByBrand : [],
    ListByCategory : [],
    ListBySimiler : [],
    ProductReviewList : [],

    BrandListRequest : async ()=>{
        let res = await axios.get('/api/BrandList');
        if(res.data['status']==='success'){
            set({BrandList:res.data['data']})
        }
    },

    CategoryListRequest : async ()=>{
        let res = await axios.get('/api/CategoryList');
        if(res.data['status']==='success'){
            set({CategoryList:res.data['data']})
        }
    },
    ProductReviewListRequest : async (productID)=>{
        let res = await axios.get(`/api/ProductReviewList/${productID}`);
        if(res.data['status']==='success'){
            set({ProductReviewList:res.data['data']})
        }
    },
}));