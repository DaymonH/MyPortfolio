// "use client";

// import * as React from "react";
// import * as SwitchPrimitive from "@radix-ui/react-switch";
// import { SunIcon, MoonIcon } from "lucide-react";

// import { cn } from "@/lib/utils";

// function Switch({
//   className,
//   onCheckedChange,
//   checked: controlledChecked,
//   defaultChecked,
//   ...props
// }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
//   // Use internal state only if not controlled externally
//   const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
  
//   // Use controlled state if provided, otherwise use internal state
//   const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
  
//   const handleCheckedChange = (newChecked: boolean) => {
//     // Update internal state if not controlled
//     if (controlledChecked === undefined) {
//       setInternalChecked(newChecked);
//     }
    
//     // Call the external handler if provided
//     if (onCheckedChange) {
//       onCheckedChange(newChecked);
//     }
//   };
  
//   return (
//     <SwitchPrimitive.Root
//       data-slot="switch"
//       checked={isChecked}
//       defaultChecked={defaultChecked}
//       onCheckedChange={handleCheckedChange}
//       className={cn(
//         "peer relative inline-flex h-6 w-12 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
//         "data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-200",
//         className
//       )}
//       {...props}
//     >
//       <SwitchPrimitive.Thumb
//         data-slot="switch-thumb"
//         className={cn(
//           "pointer-events-none block size-5 rounded-full bg-white ring-0 shadow-lg transition-transform relative",
//           "data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
//         )}
//       >
//         <div className="absolute inset-0 flex items-center justify-center">
//           {/* Sun icon visible when unchecked */}
//           <SunIcon
//             className={cn(
//               "h-3 w-3 absolute transition-opacity duration-200",
//               isChecked ? "opacity-0" : "opacity-100"
//             )}
//             style={{ color: "orange" }}
//           />
          
//           {/* Moon icon visible when checked */}
//           <MoonIcon
//             className={cn(
//               "h-3 w-3 absolute transition-opacity duration-200",
//               isChecked ? "opacity-100" : "opacity-0"
//             )}
//             style={{ color: "blue" }}
//           />
//         </div>
//       </SwitchPrimitive.Thumb>
//     </SwitchPrimitive.Root>
//   );
// }

// export { Switch };




"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { SunIcon, MoonIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Switch({
  className,
  onCheckedChange,
  checked: controlledChecked,
  defaultChecked,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  // Use internal state only if not controlled externally
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
  
  // Use controlled state if provided, otherwise use internal state
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
  
  const handleCheckedChange = (newChecked: boolean) => {
    // Update internal state if not controlled
    if (controlledChecked === undefined) {
      setInternalChecked(newChecked);
    }
    
    // Call the external handler if provided
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }
  };
  
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      checked={isChecked}
      defaultChecked={defaultChecked}
      onCheckedChange={handleCheckedChange}
      className={cn(
        "peer relative inline-flex h-6 w-12 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-5 rounded-full bg-background ring-0 shadow-lg transition-transform relative",
          "data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Sun icon visible when unchecked */}
          <SunIcon
            className={cn(
              "h-3 w-3 absolute transition-opacity duration-200",
              isChecked ? "opacity-0" : "opacity-100"
            )}
            style={{ color: "orange" }}
          />
          
          {/* Moon icon visible when checked */}
          <MoonIcon
            className={cn(
              "h-3 w-3 absolute transition-opacity duration-200",
              isChecked ? "opacity-100" : "opacity-0"
            )}
            style={{ color: "blue" }}
          />
        </div>
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };

