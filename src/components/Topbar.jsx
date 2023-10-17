import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-topbar h-[50px] flex justify-between items-center px-[127px]">
      <div className="flex items-center gap-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M9.30657 2.08629L10.3956 2.51529C10.784 2.66823 11.216 2.66823 11.6045 2.51529L12.6935 2.08629C13.3346 1.83416 14.0485 1.84059 14.6849 2.10423C15.3214 2.36788 15.8307 2.86817 16.1057 3.49979L16.5721 4.57229C16.7386 4.95505 17.044 5.26046 17.4268 5.42699L18.4993 5.89339C19.1312 6.16839 19.6317 6.6779 19.8953 7.3146C20.159 7.95129 20.1652 8.66547 19.9128 9.30669L19.4838 10.3957C19.3311 10.7838 19.3311 11.2154 19.4838 11.6035L19.9128 12.6925C20.1649 13.3336 20.1585 14.0475 19.8948 14.6839C19.6312 15.3204 19.1309 15.8297 18.4993 16.1047L17.4268 16.5711C17.044 16.7375 16.7385 17.043 16.5721 17.4258L16.1057 18.4983C15.8307 19.1302 15.3212 19.6307 14.6845 19.8943C14.0478 20.158 13.3336 20.1643 12.6924 19.9118L11.6034 19.4828C11.2152 19.3301 10.7837 19.3301 10.3956 19.4828L9.30657 19.9118C8.66548 20.1639 7.95157 20.1575 7.31513 19.8939C6.67869 19.6302 6.16936 19.1299 5.89437 18.4983L5.42797 17.4258C5.26144 17.043 4.95603 16.7376 4.57327 16.5711L3.50077 16.1047C2.86888 15.8297 2.36839 15.3202 2.10472 14.6835C1.84106 14.0468 1.8348 13.3326 2.08727 12.6914L2.51627 11.6024C2.66892 11.2143 2.66892 10.7827 2.51627 10.3946L2.08727 9.30559C1.83513 8.66451 1.84156 7.9506 2.10521 7.31415C2.36885 6.67771 2.86915 6.16839 3.50077 5.89339L4.57327 5.42699C4.95603 5.26046 5.26144 4.95505 5.42797 4.57229L5.89437 3.49979C6.16936 2.86791 6.67887 2.36741 7.31557 2.10375C7.95227 1.84008 8.66645 1.83382 9.30767 2.08629H9.30657ZM13.0961 3.10929L12.0071 3.53829C11.3599 3.79299 10.6402 3.79299 9.99297 3.53829L8.90397 3.10929C8.52797 2.9615 8.1093 2.96536 7.73609 3.12006C7.36288 3.27476 7.06425 3.56824 6.90307 3.93869L6.43667 5.01119C6.15911 5.64912 5.65009 6.15814 5.01217 6.43569L3.93967 6.90209C3.56914 7.06348 3.27572 7.36237 3.12121 7.73582C2.96671 8.10926 2.96318 8.5281 3.11137 8.90409L3.53927 9.99199C3.79397 10.6392 3.79397 11.3589 3.53927 12.0061L3.11027 13.0951C2.80337 13.8761 3.16967 14.7605 3.93967 15.096L5.01217 15.5624C5.65009 15.84 6.15911 16.349 6.43667 16.9869L6.90307 18.0594C7.06445 18.4299 7.36335 18.7233 7.73679 18.8779C8.11024 19.0324 8.52908 19.0359 8.90507 18.8877L9.99297 18.4587C10.6402 18.204 11.3599 18.204 12.0071 18.4587L13.0961 18.8877C13.8771 19.1957 14.7615 18.8294 15.097 18.0594L15.5634 16.9869C15.8409 16.349 16.3499 15.84 16.9879 15.5624L18.0604 15.096C18.4309 14.9346 18.7243 14.6357 18.8788 14.2623C19.0333 13.8888 19.0369 13.47 18.8887 13.094L18.4597 12.0061C18.205 11.3589 18.205 10.6392 18.4597 9.99199L18.8887 8.90299C19.0365 8.52713 19.0328 8.10857 18.8783 7.73538C18.7239 7.36219 18.4306 7.06347 18.0604 6.90209L16.9879 6.43569C16.3499 6.15814 15.8409 5.64912 15.5634 5.01119L15.097 3.93869C14.9356 3.56817 14.6367 3.27474 14.2632 3.12024C13.8898 2.96573 13.471 2.9622 13.095 3.11039L13.0961 3.10929ZM9.87637 12.9477L13.8892 8.43329C13.9807 8.33197 14.1067 8.26834 14.2426 8.25478C14.3785 8.24123 14.5146 8.27872 14.6244 8.35995C14.7342 8.44119 14.8098 8.56037 14.8366 8.69429C14.8633 8.82821 14.8393 8.9673 14.7692 9.08449L14.7109 9.16479L10.3109 14.1148C10.2221 14.2146 10.1 14.2787 9.96741 14.2951C9.83482 14.3115 9.7008 14.2791 9.59037 14.2039L9.51117 14.1379L7.31117 11.9379C7.21373 11.8409 7.15616 11.7109 7.1498 11.5735C7.14344 11.4362 7.18876 11.3014 7.27682 11.1959C7.36489 11.0903 7.48931 11.0215 7.62557 11.0031C7.76183 10.9847 7.90004 11.018 8.01297 11.0964L8.08887 11.1602L9.87637 12.9477Z"
            fill="white"
          />
        </svg>
        <h4 className="text-white leading-4">30-DAY SATISFACTION GUARANTEE</h4>
      </div>
      <div className="flex items-center gap-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M21.1037 10.1217L19.9005 7.11391C19.8119 6.89016 19.6579 6.69832 19.4586 6.56342C19.2593 6.42852 19.024 6.35681 18.7834 6.35766H15.6406V5.5C15.6406 5.36325 15.5863 5.2321 15.4896 5.1354C15.3929 5.0387 15.2618 4.98438 15.125 4.98438H2.0625C1.74341 4.98438 1.43739 5.11113 1.21176 5.33676C0.986132 5.56239 0.859375 5.86841 0.859375 6.1875V15.8125C0.859375 16.1316 0.986132 16.4376 1.21176 16.6632C1.43739 16.8889 1.74341 17.0156 2.0625 17.0156H3.66094C3.77928 17.5984 4.09547 18.1224 4.55593 18.4988C5.01639 18.8751 5.5928 19.0807 6.1875 19.0807C6.7822 19.0807 7.35861 18.8751 7.81907 18.4988C8.27953 18.1224 8.59572 17.5984 8.71406 17.0156H13.2859C13.4043 17.5984 13.7205 18.1224 14.1809 18.4988C14.6414 18.8751 15.2178 19.0807 15.8125 19.0807C16.4072 19.0807 16.9836 18.8751 17.4441 18.4988C17.9045 18.1224 18.2207 17.5984 18.3391 17.0156H19.9375C20.2566 17.0156 20.5626 16.8889 20.7882 16.6632C21.0139 16.4376 21.1406 16.1316 21.1406 15.8125V10.3125C21.1405 10.2471 21.128 10.1824 21.1037 10.1217ZM15.6406 7.39062H18.7842C18.8186 7.39059 18.8523 7.4009 18.8808 7.4202C18.9093 7.43951 18.9313 7.46693 18.9441 7.49891L19.8636 9.79688H15.6406V7.39062ZM1.89062 6.1875C1.89062 6.14192 1.90873 6.0982 1.94097 6.06597C1.9732 6.03373 2.01692 6.01562 2.0625 6.01562H14.6094V11.8594H1.89062V6.1875ZM6.1875 18.0469C5.88156 18.0469 5.58248 17.9562 5.3281 17.7862C5.07372 17.6162 4.87545 17.3746 4.75837 17.092C4.64129 16.8093 4.61066 16.4983 4.67035 16.1982C4.73003 15.8982 4.87736 15.6225 5.09369 15.4062C5.31003 15.1899 5.58566 15.0425 5.88572 14.9828C6.18578 14.9232 6.49681 14.9538 6.77946 15.0709C7.06212 15.188 7.30371 15.3862 7.47368 15.6406C7.64365 15.895 7.73438 16.1941 7.73438 16.5C7.73438 16.9103 7.5714 17.3037 7.28131 17.5938C6.99121 17.8839 6.59776 18.0469 6.1875 18.0469ZM13.2859 15.9844H8.71406C8.59572 15.4016 8.27953 14.8776 7.81907 14.5012C7.35861 14.1249 6.7822 13.9193 6.1875 13.9193C5.5928 13.9193 5.01639 14.1249 4.55593 14.5012C4.09547 14.8776 3.77928 15.4016 3.66094 15.9844H2.0625C2.01692 15.9844 1.9732 15.9663 1.94097 15.934C1.90873 15.9018 1.89062 15.8581 1.89062 15.8125V12.8906H14.6094V14.2209C14.2725 14.3992 13.9792 14.6497 13.7504 14.9546C13.5216 15.2594 13.363 15.6111 13.2859 15.9844ZM15.8125 18.0469C15.5066 18.0469 15.2075 17.9562 14.9531 17.7862C14.6987 17.6162 14.5005 17.3746 14.3834 17.092C14.2663 16.8093 14.2357 16.4983 14.2953 16.1982C14.355 15.8982 14.5024 15.6225 14.7187 15.4062C14.935 15.1899 15.2107 15.0425 15.5107 14.9828C15.8108 14.9232 16.1218 14.9538 16.4045 15.0709C16.6871 15.188 16.9287 15.3862 17.0987 15.6406C17.2687 15.895 17.3594 16.1941 17.3594 16.5C17.3594 16.9103 17.1964 17.3037 16.9063 17.5938C16.6162 17.8839 16.2228 18.0469 15.8125 18.0469ZM20.1094 15.8125C20.1094 15.8581 20.0913 15.9018 20.059 15.934C20.0268 15.9663 19.9831 15.9844 19.9375 15.9844H18.3391C18.2194 15.4024 17.9028 14.8795 17.4426 14.5038C16.9823 14.1281 16.4066 13.9226 15.8125 13.9219C15.7549 13.9219 15.6973 13.9219 15.6406 13.9279V10.8281H20.1094V15.8125Z"
            fill="white"
          />
        </svg>
        <h4 className="text-white leading-4">
          Free delivery on orders over $40.00
        </h4>
      </div>{" "}
      <div className="flex items-center gap-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M10.9314 17.1698L11.002 17.234L11.0694 17.1665L11.1593 17.0766C13.3384 15.1035 15.1537 13.4584 16.4234 11.9748C17.6925 10.4919 18.432 9.15316 18.432 7.79167C18.432 5.9031 17.0123 4.48333 15.1237 4.48333C13.6972 4.48333 12.3065 5.39227 11.7837 6.64667H10.2137C9.69089 5.39227 8.30021 4.48333 6.8737 4.48333C4.98514 4.48333 3.56536 5.9031 3.56536 7.79167C3.56536 9.15315 4.30486 10.4919 5.5728 11.9748C6.84152 13.4586 8.65483 15.1039 10.8297 17.0774L10.8306 17.0782L10.8307 17.0782L10.9314 17.1698ZM10.9228 4.72179L10.9987 4.81021L11.0746 4.72179C12.0555 3.57895 13.5589 2.85 15.1237 2.85C17.8919 2.85 20.0654 5.01451 20.0654 7.79167C20.0654 9.48671 19.3019 11.0368 17.9395 12.7036C16.576 14.3717 14.6231 16.1446 12.2607 18.2868L12.2605 18.2869L10.9987 19.4356L9.73685 18.2869L9.73671 18.2868C7.37432 16.1446 5.4214 14.3717 4.0579 12.7036C2.69549 11.0368 1.93203 9.48671 1.93203 7.79167C1.93203 5.01451 4.10547 2.85 6.8737 2.85C8.43847 2.85 9.94194 3.57895 10.9228 4.72179Z"
            fill="white"
            stroke="white"
            stroke-width="0.2"
          />
        </svg>
        <h4 className="text-white leading-4">50.000+ HAPPY CUSTOMERS</h4>
      </div>{" "}
      <div className="flex items-center gap-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M12.5562 3.9985C12.6593 3.89536 12.7173 3.75549 12.7173 3.60965C12.7173 3.46381 12.6593 3.32394 12.5562 3.2208L10.2231 0.887698C10.1194 0.787511 9.98047 0.732075 9.83626 0.733328C9.69206 0.734581 9.55411 0.792424 9.45214 0.894398C9.35016 0.996373 9.29232 1.13432 9.29106 1.27853C9.28981 1.42274 9.34525 1.56167 9.44544 1.6654L10.5421 2.7621C8.85129 2.85608 7.23032 3.46813 5.89932 4.51513C4.56831 5.56214 3.59175 6.99338 3.10221 8.61454C2.61268 10.2357 2.6339 11.9682 3.16298 13.5769C3.69207 15.1856 4.70339 16.5925 6.05963 17.6066C6.17633 17.6941 6.32301 17.7317 6.46742 17.7111C6.61182 17.6904 6.74211 17.6133 6.82964 17.4966C6.91716 17.3799 6.95474 17.2332 6.93411 17.0888C6.91348 16.9444 6.83633 16.8141 6.71964 16.7266C5.41064 15.7481 4.47637 14.3507 4.07242 12.7671C3.66847 11.1835 3.81922 9.50929 4.49956 8.02332C5.17991 6.53736 6.34879 5.32932 7.81153 4.60039C9.27427 3.87146 10.9426 3.66564 12.5386 4.0172L12.5562 3.9985ZM9.44544 17.9993L9.46304 17.9817C9.91184 18.0807 10.3771 18.1357 10.8534 18.1467L10.8468 18.1533C10.8738 18.1498 10.901 18.1484 10.9282 18.1489C12.4361 18.1646 13.9104 17.703 15.1402 16.8304C16.3701 15.9577 17.2925 14.7185 17.7756 13.29C18.2587 11.8615 18.2778 10.3168 17.8302 8.87676C17.3825 7.43674 16.491 6.17513 15.2831 5.2723C15.2254 5.22896 15.1767 5.17467 15.1399 5.11252C15.1031 5.05037 15.0789 4.98158 15.0687 4.91008C15.0584 4.83858 15.0624 4.76577 15.0803 4.6958C15.0983 4.62583 15.1298 4.56008 15.1731 4.5023C15.2165 4.44452 15.2708 4.39584 15.3329 4.35904C15.3951 4.32224 15.4639 4.29804 15.5354 4.28783C15.6069 4.27761 15.6797 4.28158 15.7496 4.29951C15.8196 4.31743 15.8854 4.34896 15.9431 4.3923C17.2994 5.4064 18.3107 6.81329 18.8398 8.42198C19.3689 10.0307 19.3901 11.7632 18.9006 13.3844C18.411 15.0055 17.4345 16.4368 16.1035 17.4838C14.7724 18.5308 13.1515 19.1428 11.4606 19.2368L12.5562 20.3324C12.6088 20.3831 12.6507 20.4438 12.6795 20.5109C12.7083 20.578 12.7235 20.6502 12.7241 20.7232C12.7248 20.7963 12.7108 20.8687 12.6832 20.9363C12.6555 21.0039 12.6147 21.0653 12.5631 21.1169C12.5114 21.1686 12.45 21.2094 12.3824 21.2371C12.3148 21.2647 12.2424 21.2786 12.1694 21.278C12.0963 21.2774 12.0242 21.2622 11.9571 21.2334C11.89 21.2045 11.8293 21.1626 11.7785 21.1101L9.44544 18.7781C9.39422 18.727 9.35358 18.6663 9.32585 18.5995C9.29812 18.5327 9.28385 18.461 9.28385 18.3887C9.28385 18.3164 9.29812 18.2447 9.32585 18.1779C9.35358 18.1111 9.39422 18.0504 9.44544 17.9993ZM13.5902 8.9595C13.6415 9.01059 13.6821 9.07128 13.7098 9.1381C13.7375 9.20492 13.7518 9.27655 13.7518 9.3489C13.7518 9.42124 13.7375 9.49288 13.7098 9.5597C13.6821 9.62652 13.6415 9.68721 13.5902 9.7383L10.2902 13.0383C10.2391 13.0895 10.1785 13.1302 10.1116 13.1579C10.0448 13.1856 9.97318 13.1999 9.90084 13.1999C9.82849 13.1999 9.75686 13.1856 9.69004 13.1579C9.62322 13.1302 9.56253 13.0895 9.51144 13.0383L7.86143 11.3883C7.75816 11.285 7.70014 11.145 7.70014 10.9989C7.70014 10.8528 7.75816 10.7128 7.86143 10.6095C7.96471 10.5062 8.10478 10.4482 8.25083 10.4482C8.39689 10.4482 8.53696 10.5062 8.64024 10.6095L9.90084 11.8712L12.8114 8.9595C12.8625 8.90828 12.9232 8.86764 12.99 8.83991C13.0569 8.81219 13.1285 8.79792 13.2008 8.79792C13.2732 8.79792 13.3448 8.81219 13.4116 8.83991C13.4785 8.86764 13.5391 8.90828 13.5902 8.9595ZM5.50084 11C5.50084 9.54131 6.0803 8.14236 7.11175 7.11091C8.1432 6.07946 9.54214 5.5 11.0008 5.5C12.4595 5.5 13.8585 6.07946 14.8899 7.11091C15.9214 8.14236 16.5008 9.54131 16.5008 11C16.5008 12.4587 15.9214 13.8576 14.8899 14.8891C13.8585 15.9205 12.4595 16.5 11.0008 16.5C9.54214 16.5 8.1432 15.9205 7.11175 14.8891C6.0803 13.8576 5.50084 12.4587 5.50084 11ZM11.0008 6.6C9.83388 6.6 8.71473 7.06357 7.88956 7.88873C7.0644 8.71389 6.60084 9.83305 6.60084 11C6.60084 12.167 7.0644 13.2861 7.88956 14.1113C8.71473 14.9364 9.83388 15.4 11.0008 15.4C12.1678 15.4 13.2869 14.9364 14.1121 14.1113C14.9373 13.2861 15.4008 12.167 15.4008 11C15.4008 9.83305 14.9373 8.71389 14.1121 7.88873C13.2869 7.06357 12.1678 6.6 11.0008 6.6Z"
            fill="white"
          />
        </svg>
        <h4 className="text-white leading-4">100% Money Back Guarantee</h4>
      </div>
    </div>
  );
};

export default Topbar;