// // src/components/shadcn.jsx

// import React, { useState } from 'react';
// import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
// import { Check } from 'lucide-react';

// // Utility function for class names
// const cn = (...classes) => classes.filter(Boolean).join(' ');

// // Define the Checkbox component
// const Checkbox = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <CheckboxPrimitive.Root
//       ref={ref}
//       className={cn(
//         'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
//         className
//       )}
//       {...props}
//     >
//       <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
//         <Check className="h-4 w-4" />
//       </CheckboxPrimitive.Indicator>
//     </CheckboxPrimitive.Root>
//   )
// );
// Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// // Define the CheckboxDemo component
// const CheckboxDemo = () => {
//   const [checked, setChecked] = useState(false);

//   return (
//     <div>
//       <label className="flex items-center space-x-2">
//         <Checkbox checked={checked} onCheckedChange={(checked) => setChecked(checked)} />
//         <span>Accept Terms and Conditions</span>
//       </label>
//       <p>{checked ? 'Checked' : 'Unchecked'}</p>
//     </div>
//   );
// };

// // Export the component as default
// export default CheckboxDemo;
