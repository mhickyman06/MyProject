using System;
using System.ComponentModel.DataAnnotations;


namespace ProjectApi.Model
{
    public class RegisterModel
    {
        [Required(ErrorMessage ="First Name is required")]
        public string  FirstName { get; set; }
        [Required(ErrorMessage ="Last Name is required")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

    }
}