import {EmailValidator , NameValidator, MobileValidator , resumeValidator , GithubValidator,LinkedInValidator} from '../validators/';

export default function ValidationService(servicenumber , data){
   switch(servicenumber){
      case 0:
         return EmailValidator(data);
         break;
      case 1:
         return NameValidator(data);
         break;
      case 2:
         return MobileValidator(data);
         break;
      case 3:
         return resumeValidator(data);
         break;
      case 4:
         return GithubValidator(data);
         break;
      case 5:
         return LinkedInValidator(data);
         break;

   }
   
}

