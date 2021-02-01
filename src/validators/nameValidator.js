export default function ValidateName(name) 
{
 if (/^[A-Za-z\s]+$/.test(name))
  {
    return (true)
  }
    return (false)
}