export default function ValidateResume(profile) 
{
 if (/^(https?:\/\/)?(www\.)?[a-zA-Z0-9_]{1,25}$/igm .test(profile))
  {
    return (true)
  }
    return (false)
}