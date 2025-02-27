function showCategory(category) {
  // Hide both sections initially
  document.getElementById('veg').style.display = 'none';
  document.getElementById('nonveg').style.display = 'none';
  
  // Show the selected category
  document.getElementById(category).style.display = 'block';
}


