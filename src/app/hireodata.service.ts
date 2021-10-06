import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HireodataService {
  
  constructor() { }

  get_introbanner_countdata(){    
    return {
      posted_job: 18692 , 
      posted_task: 35686 , 
      freelancers: 45625
    };
  }

  get_popular_job_categories(){
    return [
      {
          id: 1 ,
          link: '/' ,
          category_icon: 'icon-line-awesome-file-code-o' , 
          category_name: 'Web & Software Dev' , 
          category_box_count: 612 , 
          description: 'Software Engineer, Web / Mobile Developer & More'
      } ,
      {
          id: 2 ,
          link: '/' ,
          category_icon: 'icon-line-awesome-cloud-upload' , 
          category_name: 'Data Science & Analitycs' , 
          category_box_count: 113 , 
          description: 'Data Specialist / Scientist, Data Analyst & More'
      } ,
      {
          id: 3 ,
          link: '/' ,
          category_icon: 'icon-line-awesome-suitcase' , 
          category_name: 'Accounting & Consulting' , 
          category_box_count: 186 , 
          description: 'Auditor, Accountant, Fnancial Analyst & More'
      }
    ];
  }

  get_featured_jobs(){
    return [
      {
          id: 1 ,
          link: '/' ,
          company_logo: 'assets/images/company-logo-01.png' , 
          listing_title: 'Bilingual Event Support Specialist' , 
          business: 'Hexagon' , 
          location: 'San Francissco' , 
          business_center: 'Full Time' , 
          access_day: 2
      },
      {
          id: 2 ,
          link: '/' ,
          company_logo: 'assets/images/company-logo-05.png' , 
          listing_title: 'Competition Law Officer' , 
          business: 'Laxo' , 
          location: 'San Francissco' , 
          business_center: 'Full Time' , 
          access_day: 2
      }
    ];
  }

  get_featured_cities(){
    return [
      {
          id: 1 ,
          link: '/' ,
          city_name: 'San Francisco' , 
          city_job_count: 376 , 
          city_image: 'assets/images/featured-city-01.jpg'
      } ,
      {
          id: 2 ,
          link: '/' ,
          city_name: 'New York' , 
          city_job_count: 645 , 
          city_image: 'assets/images/featured-city-02.jpg'
      } ,
      {
          id: 3 ,
          link: '/' ,
          city_name: 'Los Angeles' , 
          city_job_count: 832 , 
          city_image: 'assets/images/featured-city-03.jpg'
      } ,
      {
          id: 4 ,
          link: '/' ,
          city_name: 'Miami' , 
          city_job_count: 513 , 
          city_image: 'assets/images/featured-city-04.jpg'
      }
    ];
  }

  get_rated_freelancers(){
    return [
      { id : 1 , freelancer_name: 'Tom Smith' , avatar_img: 'assets/images/user-avatar-big-01.jpg' , flag_img: 'assets/images/flags/gb.svg' , country: 'United Kingdom' , skill: 'UI/UX Designer' , rating: '5.0' , detail_location: 'London' , detail_rate: '$60 / hr' , detail_job_success: 95 , is_bookmark: true , link: '/' } , 
      { id : 1 , freelancer_name: 'David Peterson' , avatar_img: 'assets/images/user-avatar-big-02.jpg' , flag_img: 'assets/images/flags/de.svg' , country: 'Germany' , skill: 'iOS Expert + Node Dev' , rating: '4.0' , detail_location: 'Berlin' , detail_rate: '$40 / hr' , detail_job_success: 88 , is_bookmark: false , link: '/' } , 
      { id : 1 , freelancer_name: 'Tom Smith' , avatar_img: 'assets/images/user-avatar-big-01.jpg' , flag_img: 'assets/images/flags/gb.svg' , country: 'United Kingdom' , skill: 'UI/UX Designer' , rating: '5.0' , detail_location: 'London' , detail_rate: '$60 / hr' , detail_job_success: 95 , is_bookmark: true , link: '/' } , 
      { id : 1 , freelancer_name: 'David Peterson' , avatar_img: 'assets/images/user-avatar-big-02.jpg' , flag_img: 'assets/images/flags/de.svg' , country: 'Germany' , skill: 'iOS Expert + Node Dev' , rating: '5.0' , detail_location: 'Berlin' , detail_rate: '$40 / hr' , detail_job_success: 88 , is_bookmark: false , link: '/' }
    ]
  }

  get_membershipplan(){
    return [
      {
          id: 1 ,
          buy_link: '/' ,
          plan_name: 'Basic Plan' , 
          description: 'One time fee for one listing or task highlighted in search results.' , 
          price_monthly: '$19' , 
          price_yearly: '$205' ,
          feature_listing: 1 , 
          feature_day_visibility: 30 , 
          feature_searchresult: 'Highlighted in Search Results' , 
          is_recommended: false
      } ,
      {
          id: 2 ,
          buy_link: '/' ,
          plan_name: 'Standard Plan' , 
          description: 'One time fee for one listing or task highlighted in search results.' , 
          price_monthly: '$49' , 
          price_yearly: '$525' ,
          feature_listing: 5 , 
          feature_day_visibility: 60 , 
          feature_searchresult: 'Highlighted in Search Results' , 
          is_recommended: true
      } ,
      {
          id: 3 ,
          buy_link: '/' ,
          plan_name: 'Extended Plan' , 
          description: 'One time fee for one listing or task highlighted in search results.' , 
          price_monthly: '$99' , 
          price_yearly: '$1069' ,
          feature_listing: 'Unlimited' , 
          feature_day_visibility: 90 , 
          feature_searchresult: 'Highlighted in Search Results' , 
          is_recommended: false
      }
    ]
  }
}
