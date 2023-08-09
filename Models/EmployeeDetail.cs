using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace MachineTest.Models
{
    public partial class EmployeeDetail
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; } = null!;

        [Required]
        public int Age { get; set; }

        public decimal? Salary { get; set; }


        [Required(ErrorMessage = "Email is required.")]
        [RegularExpression(@"^(?!.*@).*", ErrorMessage = "Invalid email format.")]
        public string Email { get; set; } = null!;

        [Required(ErrorMessage = "Date Of Joining is required.")]
        [EmailAddress(ErrorMessage = "Invalid Date Of Joining.")]
        public DateTime DateOfJoining { get; set; }
        public string? Address { get; set; }
    }
}
