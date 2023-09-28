// Google Sign-in Method
function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();

  document.querySelector("#signin_user").style.display = "none";
  document.querySelector("#user_info").style.display = "block";

  document.querySelector("#user_name").textContent = profile.getName();
  document.querySelector("#userId").textContent = profile.getId();
  document.querySelector("#userName").textContent = profile.getName();
  document.querySelector("#userMailId").textContent = profile.getEmail();

  const userImg = document.querySelector("#user_img");
  userImg.src = profile.getImageUrl();
  userImg.alt = profile.getName();

  const homeProfileIcon = document.querySelector("#home_profile_icon");
  homeProfileIcon.src = profile.getImageUrl();
  homeProfileIcon.alt = profile.getName();

  // Redirecting to User Info Box
  location.href = `${location.href.substr(0, 44)}/#user_info_box`;
}
