<template>
  <div>
<div style="display:flex; justify-content:center; padding: 3em 0; flex-wrap:wrap;">
        <a href="https://www.dapp.com/app/otterpocket"
          ><img width="300" src="../assets/images/dapp-logo.png" alt="logo"
        /></a>
        <a href="https://dappradar.com/polygon/other/otterpocket" 
          ><img width="300" src="../assets/images/dappradar.png" style="margin: 1em 2em;" alt="logo"
        /></a>
        <a href="https://polygon.technology"
          ><img width="300" src="../assets/images/polygon-logo.png" alt="logo" style="margin-top:3em;"
        /></a>
      </div>
    <!-- Footer Section start -->
    <div class="copyright-section index-footer bg-light" style="text-align:center;">
      <div style="display:flex; justify-content:center; padding: 3em 0;">
        <a href="https://www.youtube.com/channel/UC-nMOEVrpTGTgLioqcyZf0A"
          ><img width="50em" src="../assets/images/icon/OPYOUTUBE.svg" alt="logo"
        /></a>
        <a href="https://otterpocket.medium.com" 
          ><img width="50em" src="../assets/images/icon/OPMEDIUM.svg" style="margin: 0 2em;" alt="logo"
        /></a>
        <a href="https://www.instagram.com/otterpocketofficial/"
          ><img width="50em" src="../assets/images/icon/OPINSTAGRAM.svg" alt="logo"
        /></a>
        <a href="https://twitter.com/Otter_pocket"
          ><img width="50em" src="../assets/images/icon/OPTWITTER.svg"   style="margin: 0 2em;" alt="logo"
        /></a>
        <a href="https://t.me/otterpocketstorage"
          ><img width="50em" src="../assets/images/icon/OPTELEGRAM.svg" alt="logo"
        /></a>
      </div>
             <p> Hosted on IPFS | Otter Pocket © 2021 </p>
 
              <button
                    type="button"
                    class="btn btn-custom theme-color theme-color">
                      <div @click="showDisclaimer=true">
                        <a style="color:white;">
                          Disclaimer
                            </a></div>
                  </button>
                  <div class="disclaimer" v-if="showDisclaimer">
                   <p class="title" style="font-weight:bold;">By purchasing OTTER token, you agree that you are not purchasing a security or investment contract and you agree to hold the team harmless and not liable for any losses or taxes you may incur. 
        Although OTTER is a community driven DeFi Ecosystem and not a registered digital currency, always make sure that you are in compliance with local laws and regulations before you make any purchase. 
        Cryptocurrencies are not legal tender and are not investments. FULL DISCLAIMER - Last updated: July 25, 2021 -

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
Definitions

For the purposes of this Disclaimer:

    Company (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Otter Pocket.

    Service refers to the Application.

    You means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

    Application means the software program provided by the Company downloaded by You on any electronic device named Otter Pocket dApp.

The information contained on the Service is for general information purposes only.

The Company assumes no responsibility for errors or omissions in the contents of the Service.

In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the Disclaimer Generator.

The Company does not warrant that the Service is free of viruses or other harmful components.
External Links Disclaimer

The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.

Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
Errors and Omissions Disclaimer

The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.

The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
Fair Use Disclaimer

The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.

The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.

If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
Views Expressed Disclaimer

The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.

Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserve the right to delete any comment for any reason whatsoever.
No Responsibility Disclaimer

The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.

In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
"Use at Your Own Risk" Disclaimer

All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.

The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
Contact Us

If you have any questions about this Disclaimer, You can contact Us:

    By email: otterpocket@protonmail.com
                  </p></div>
                  


      <div style="text-align: left; padding: 2em;">
       


      </div>

​
    </div>
    <!-- Footer Section End -->
    <!-- Tap on Top -->
    <div class="tap-top">
      <div>
        <i class="fa fa-angle-double-up"></i>
      </div>
    </div>
    <!-- Tap on Ends -->
  </div>
</template>
<script

data() {

    return {
       showDisclaimer: false,
    }
  }

export default {
  name: "Footer"
};

</script>

<style>

.disclaimer {
background-color: white;
font-size: 40px;
margin-right: 100px;
margin-left: 100px;
}
</style>
