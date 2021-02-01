export default function ValidateLinkedIn(profile) 
{
 if (/(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com\/in\/[A-z0-9_-]+\/?(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/?.test(profile))
  {
    return (true)
  }
    return (false)
}