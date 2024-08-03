// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import '../../assets/css/others/Goalsetting.css';

// // export default function Goalsetting() {
// //   return (
// //     <div className="flex flex-col min-h-dvh">
// //       <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
// //         <div className="container px-4 md:px-6 text-center text-primary-foreground">
// //           <div className="space-y-4">
// //             <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Achieve Your Fitness Goals</h1>
// //             <p className="max-w-[700px] mx-auto text-lg md:text-xl">
// //               Set and track your personal fitness goals with our easy-to-use goal setting tool.
// //             </p>
// //             <Link
// //               href="#"
// //               className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
// //               prefetch={false}
// //             >
// //               Set a Goal
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //       <section id="goal-form" className="w-full py-12 md:py-24 lg:py-32">
// //         <div className="container px-4 md:px-6">
// //           <Card className="w-full max-w-2xl mx-auto">
// //             <CardHeader>
// //               <CardTitle>Set a New Goal</CardTitle>
// //               <CardDescription>Fill out the form below to create a new personal goal.</CardDescription>
// //             </CardHeader>
// //             <CardContent className="space-y-4">
// //               <div className="grid gap-2">
// //                 <Label htmlFor="goal-title">Goal Title</Label>
// //                 <Input id="goal-title" placeholder="e.g. Run a 5K" />
// //               </div>
// //               <div className="grid gap-2">
// //                 <Label htmlFor="goal-description">Goal Description</Label>
// //                 <Textarea id="goal-description" placeholder="Describe your goal in more detail..." rows={3} />
// //               </div>
// //               <div className="grid grid-cols-2 gap-4">
// //                 <div className="grid gap-2">
// //                   <Label htmlFor="target-date">Target Date</Label>
// //                   <Input
// //                     id="target-date"
// //                     type="date"
// //                     className="pr-12"
// //                     defaultValue={new Date().toISOString().slice(0, 10)}
// //                   />
// //                 </div>
// //                 <div className="grid gap-2">
// //                   <Label htmlFor="progress">Progress</Label>
// //                   <div className="flex items-center gap-2">
// //                     <Progress id="progress" value={0} className="flex-1" />
// //                     <span className="text-sm font-medium">0%</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </CardContent>
// //             <CardFooter>
// //               <Button type="submit" className="w-full">
// //                 Save Goal
// //               </Button>
// //             </CardFooter>
// //           </Card>
// //         </div>
// //       </section>
// //       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
// //         <div className="container px-4 md:px-6">
// //           <div className="space-y-6">
// //             <div className="space-y-2">
// //               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Goals</h2>
// //               <p className="text-muted-foreground">View and manage your personal fitness goals.</p>
// //             </div>
// //             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle>Run a 5K</CardTitle>
// //                   <CardDescription>Train for and complete a 5K race by the end of the year.</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex items-center gap-2">
// //                     <Progress value={75} className="flex-1" />
// //                     <span className="text-sm font-medium">75%</span>
// //                   </div>
// //                 </CardContent>
// //                 <CardFooter className="flex items-center justify-between">
// //                   <span className="text-sm text-muted-foreground">Target Date: Dec 31, 2023</span>
// //                   <div className="flex gap-2">
// //                     <Button variant="ghost" size="icon">
// //                       <FilePenIcon className="w-5 h-5" />
// //                       <span className="sr-only">Edit</span>
// //                     </Button>
// //                     <Button variant="ghost" size="icon">
// //                       <TrashIcon className="w-5 h-5" />
// //                       <span className="sr-only">Delete</span>
// //                     </Button>
// //                   </div>
// //                 </CardFooter>
// //               </Card>
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle>Lift 200 lbs</CardTitle>
// //                   <CardDescription>Increase my bench press to 200 lbs by the end of the year.</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex items-center gap-2">
// //                     <Progress value={50} className="flex-1" />
// //                     <span className="text-sm font-medium">50%</span>
// //                   </div>
// //                 </CardContent>
// //                 <CardFooter className="flex items-center justify-between">
// //                   <span className="text-sm text-muted-foreground">Target Date: Dec 31, 2023</span>
// //                   <div className="flex gap-2">
// //                     <Button variant="ghost" size="icon">
// //                       <FilePenIcon className="w-5 h-5" />
// //                       <span className="sr-only">Edit</span>
// //                     </Button>
// //                     <Button variant="ghost" size="icon">
// //                       <TrashIcon className="w-5 h-5" />
// //                       <span className="sr-only">Delete</span>
// //                     </Button>
// //                   </div>
// //                 </CardFooter>
// //               </Card>
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle>Lose 20 lbs</CardTitle>
// //                   <CardDescription>Reach my target weight of 150 lbs by the end of the year.</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex items-center gap-2">
// //                     <Progress value={25} className="flex-1" />
// //                     <span className="text-sm font-medium">25%</span>
// //                   </div>
// //                 </CardContent>
// //                 <CardFooter className="flex items-center justify-between">
// //                   <span className="text-sm text-muted-foreground">Target Date: Dec 31, 2023</span>
// //                   <div className="flex gap-2">
// //                     <Button variant="ghost" size="icon">
// //                       <FilePenIcon className="w-5 h-5" />
// //                       <span className="sr-only">Edit</span>
// //                     </Button>
// //                     <Button variant="ghost" size="icon">
// //                       <TrashIcon className="w-5 h-5" />
// //                       <span className="sr-only">Delete</span>
// //                     </Button>
// //                   </div>
// //                 </CardFooter>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // function Card({ children, className }) {
// //   return <div className={`card ${className}`}>{children}</div>;
// // }

// // function CardHeader({ children }) {
// //   return <div className="card-header">{children}</div>;
// // }

// // function CardTitle({ children }) {
// //   return <h3 className="card-title">{children}</h3>;
// // }

// // function CardDescription({ children }) {
// //   return <p className="card-description">{children}</p>;
// // }

// // function CardContent({ children, className }) {
// //   return <div className={`card-content ${className}`}>{children}</div>;
// // }

// // function CardFooter({ children, className }) {
// //   return <div className={`card-footer ${className}`}>{children}</div>;
// // }

// // function Label({ htmlFor, children }) {
// //   return <label htmlFor={htmlFor}>{children}</label>;
// // }

// // function Input({ id, type = 'text', className, defaultValue, placeholder }) {
// //   return (
// //     <input
// //       id={id}
// //       type={type}
// //       className={className}
// //       defaultValue={defaultValue}
// //       placeholder={placeholder}
// //     />
// //   );
// // }

// // function Textarea({ id, rows, className, placeholder }) {
// //   return (
// //     <textarea
// //       id={id}
// //       rows={rows}
// //       className={className}
// //       placeholder={placeholder}
// //     />
// //   );
// // }

// // function Progress({ id, value, className }) {
// //   return (
// //     <progress id={id} value={value} max="100" className={className}></progress>
// //   );
// // }

// // function Button({ type, className, children, variant, size }) {
// //   return (
// //     <button type={type} className={`${className} ${variant} ${size}`}>
// //       {children}
// //     </button>
// //   );
// // }

// // function FilePenIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
// //       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
// //       <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
// //     </svg>
// //   );
// // }

// // function TrashIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M3 6h18" />
// //       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
// //       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
// //     </svg>
// //   );
// // }

// // function XIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M18 6 6 18" />
// //       <path d="m6 6 12 12" />
// //     </svg>
// //   );
// // }


// import React from 'react';
// import '../../assets/css/others/Goalsetting.css';

// const Goalsetting = () => {
//   return (
//     <div className="container py-12 md:py-24 lg:py-32">
//       <div className="bg-primary text-primary-foreground px-4 md:px-6 text-center max-w-[700px] mx-auto space-y-4">
//         <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl sm:text-5xl md:text-6xl">Set Your Goals</h1>
//         <p className="text-lg md:text-xl text-muted-foreground">Define your fitness objectives to stay motivated.</p>
//         <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">Get Started</button>
//       </div>

//       <div className="mt-4 lg:mt-8 space-y-6">
//         <div className="bg-muted text-muted-foreground px-4 md:px-6 py-4 rounded-md shadow">
//           <h2 className="text-2xl font-bold mb-4">My Goals</h2>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <div className="card">
//               <div className="card-header">
//                 <h3 className="card-title">Goal 1</h3>
//                 <p className="card-description">Description of goal 1.</p>
//               </div>
//               <div className="card-content">
//                 <p>Details about goal 1.</p>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header">
//                 <h3 className="card-title">Goal 2</h3>
//                 <p className="card-description">Description of goal 2.</p>
//               </div>
//               <div className="card-content">
//                 <p>Details about goal 2.</p>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header">
//                 <h3 className="card-title">Goal 3</h3>
//                 <p className="card-description">Description of goal 3.</p>
//               </div>
//               <div className="card-content">
//                 <p>Details about goal 3.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Goalsetting;

