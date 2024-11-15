export const platforms = new Map([
  [
    "GitHub",
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <g clipPath="url(#a)">
            <path
              fill="currentColor"
              d="M9.982 2.288a8.756 8.756 0 0 0-3.963 0c-.754-.462-1.329-.674-1.747-.764a2.315 2.315 0 0 0-.544-.056 1.342 1.342 0 0 0-.247.03l-.01.002-.005.002h-.003l.146.513-.146-.512a.533.533 0 0 0-.342.294 3.328 3.328 0 0 0-.17 2.241 3.578 3.578 0 0 0-.817 2.287c0 1.657.488 2.77 1.321 3.486.584.501 1.292.768 2.002.92a2.496 2.496 0 0 0-.123 1.022v.638c-.434.09-.735.062-.95-.008-.267-.089-.473-.267-.67-.523a5.118 5.118 0 0 1-.289-.429l-.06-.099a9.772 9.772 0 0 0-.24-.378c-.202-.3-.503-.675-.99-.803l-.515-.135-.271 1.032.516.136c.085.021.196.101.379.369.07.106.137.213.202.322l.073.117c.1.162.215.342.349.517.27.352.637.707 1.184.887.373.124.797.154 1.282.079v1.992a.533.533 0 0 0 .533.533h4.267a.533.533 0 0 0 .533-.534v-3.8c0-.336-.015-.644-.11-.931.707-.15 1.41-.416 1.99-.918.833-.72 1.32-1.845 1.32-3.511v-.001a3.578 3.578 0 0 0-.82-2.267 3.328 3.328 0 0 0-.169-2.24.533.533 0 0 0-.34-.295l-.146.512c.146-.512.145-.512.144-.512l-.002-.001-.005-.002-.01-.003a1.344 1.344 0 0 0-.248-.03 2.318 2.318 0 0 0-.544.057c-.417.09-.992.302-1.745.764Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
      Color: "black",
      placeholder: "https://github.com/your-username",
      validation: {
        required: "Can’t be empty",
        pattern: {
          value:
            /^https?:\/\/(www\.)?github\.com\/[\w-]+(\/?|\/[\w.-]+\/?)\/?$/,
          message: "Please check the URL",
        },
      },
    },
  ],
  [
    "LinkedIn",
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M12.667 2A1.333 1.333 0 0 1 14 3.333v9.334A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2h9.334Zm-.334 10.333V8.8a2.173 2.173 0 0 0-2.173-2.173c-.567 0-1.227.346-1.547.866v-.74h-1.86v5.58h1.86V9.047a.93.93 0 1 1 1.86 0v3.286h1.86ZM4.587 5.707a1.12 1.12 0 0 0 1.12-1.12 1.124 1.124 0 1 0-1.12 1.12Zm.926 6.626v-5.58H3.667v5.58h1.846Z"
          />
        </svg>
      ),
      Color: "#0077B5",

      validation: {
        required: "Can’t be empty",
        pattern: {
          value: /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/,
          message: "Please check the URL",
        },
      },
      placeholder: "https://www.linkedin.com/in/your-profile",
    },
  ],
  [
    "YouTube",
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M8.162 2.667c.356.002 1.247.01 2.194.048l.336.015c.952.045 1.904.122 2.377.253.63.177 1.125.693 1.292 1.348.267 1.04.3 3.068.304 3.56V8.107c-.004.491-.037 2.52-.304 3.56a1.874 1.874 0 0 1-1.292 1.347c-.473.131-1.425.209-2.377.253l-.336.016c-.947.037-1.838.046-2.194.048h-.326c-.754-.004-3.904-.038-4.907-.317a1.875 1.875 0 0 1-1.292-1.348c-.267-1.04-.3-3.068-.304-3.56v-.216c.004-.492.037-2.52.304-3.56A1.872 1.872 0 0 1 2.93 2.984c1.002-.28 4.153-.313 4.906-.317h.326Zm-1.496 3v4.666l4-2.333-4-2.333Z"
          />
        </svg>
      ),
      Color: "red",

      validation: {
        required: "Can’t be empty",
        pattern: {
          value:
            /^https?:\/\/(www\.)?youtube\.com\/(c\/|channel\/|@)[\w-]+\/?$/,
          message: "Please check the URL",
        },
      },

      placeholder: "https://www.youtube.com/c/your-channel",
    },
  ],
  [
    "Twitter",
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M14.973 4a5.711 5.711 0 0 1-1.64.46 2.866 2.866 0 0 0 1.253-1.587 5.761 5.761 0 0 1-1.813.7 2.816 2.816 0 0 0-2.107-.906 2.857 2.857 0 0 0-2.846 2.86c0 .226.026.446.073.653A8.13 8.13 0 0 1 2 3.193a2.83 2.83 0 0 0-.387 1.433c0 .994.5 1.874 1.273 2.374-.473 0-.913-.133-1.3-.333v.02c0 1.386.987 2.546 2.294 2.806-.42.115-.86.131-1.287.047a2.854 2.854 0 0 0 2.667 1.987 5.68 5.68 0 0 1-3.554 1.226 5.83 5.83 0 0 1-.68-.04A8.096 8.096 0 0 0 5.413 14c5.253 0 8.14-4.36 8.14-8.14 0-.127 0-.247-.007-.373.56-.4 1.04-.907 1.427-1.487Z"
          />
        </svg>
      ),
      validation: {
        required: "Can’t be empty",
        pattern: {
          value: /^https?:\/\/(www\.)?twitter\.com\/[\w-]+\/?$/,
          message: "Please check the URL",
        },
      },

      Color: "#1DA1F2",
      placeholder: "https://twitter.com/your-username",
    },
  ],
  [
    "Stack Overflow",
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
          viewBox="0 0 16 17"
        >
          <g clipPath="url(#a)">
            <path
              fill="currentColor"
              d="M12.655 15.075v-4.268h1.425V16.5H1.229v-5.693h1.419v4.268h10.008Zm-8.583-1.421h7.162v-1.425H4.072v1.425Zm.175-3.235 6.988 1.458.299-1.38L4.55 9.042l-.303 1.378Zm.906-3.37 6.47 3.019.601-1.3-6.468-3.02-.602 1.292-.001.01Zm1.81-3.19L12.44 8.43l.906-1.082L7.87 2.781l-.902 1.075-.005.004ZM10.499.5l-1.163.862 4.27 5.736 1.164-.861L10.5.5Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="currentColor" d="M0 .5h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
      Color: "#F48024",

      validation: {
        required: "Can’t be empty",
        pattern: {
          value:
            /^https?:\/\/(www\.)?stackoverflow\.com\/(users\/\d+\/[\w-]+|u\/\d+)\/?$/,
          message: "Please check the URL",
        },
      },

      placeholder: "https://stackoverflow.com/users/your-id",
    },
  ],

  [
    "Codepen",
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="m11 8.801-2.334 1.555v2.398L12.798 10 11 8.8ZM9.798 8 8 6.8 6.202 8 8 9.198 9.798 8Zm3.535-.755L12.202 8l1.131.754V7.245ZM12.798 6 8.666 3.246v2.397L11 7.198 12.798 6ZM5 7.198l2.333-1.555V3.246L3.202 6 5 7.198ZM3.202 10l4.131 2.754v-2.398L5 8.801 3.202 10Zm-.536-1.246L3.798 8l-1.132-.755v1.51ZM1.333 6a.667.667 0 0 1 .297-.555l6-4a.667.667 0 0 1 .74 0l6 4a.666.666 0 0 1 .296.555v4a.665.665 0 0 1-.296.554l-6 4a.667.667 0 0 1-.74 0l-6-4A.666.666 0 0 1 1.333 10V6Z"
          />
        </svg>
      ),
      Color: "black",

      validation: {
        required: "Can’t be empty",
        pattern: {
          value: /^https?:\/\/(www\.)?codepen\.io\/[\w-]+\/?$/,
          message: "Please check the URL",
        },
      },

      placeholder: "https://codepen.io/your-username",
    },
  ],
  [
    "Facebook",
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <g clipPath="url(#a)">
            <path
              fill="currentColor"
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      ),

      validation: {
        required: "Can’t be empty",
        pattern: {
          value:
            /^https?:\/\/(www\.)?facebook\.com\/([\w.-]+|profile\.php\?id=\d+)\/?$/,
          message: "Please check the URL",
        },
      },
      Color: "#4267B2",
      placeholder: "https://www.facebook.com/your-profile",
    },
  ],
]);
