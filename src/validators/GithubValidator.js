export default function ValidateGithub(profile) 
{
 if (/^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]{1,25}$/igm .test(profile))
  {
    return (true)
  }
    return (false)
}
